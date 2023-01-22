import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Button, Alert, } from "react-native"
import React, { useCallback, useReducer, useEffect } from "react"
import { COLORS } from "../constants/index.js"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { signUp } from "../store/actions/login.actions.js"
import Input from "../components/input.js"

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

const formReducer = (state, action) => {
  console.log(action)
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    }
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let updatedFormIsValid = true
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    }
  }
  return state
}

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error", error, [{ text: "Ok" }])
    }
  }, [error])

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  })

  const handleSignUp = () => {
    //dispatch(signup(email, password))
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      )
    } else {
      Alert.alert("Formulaio inválido", "Ingresa email y usuario válido", [
        { text: "ok" },
      ])
    }
  }

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity)
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      })
    },
    [dispatchFormState]
  )

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Chrono Help: LOGIN</Text>
        <View>
          <Input
            id="email"
            label="Email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Por favor, ingrese un email válido"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            required
            password
            secureTextEntry
            autoCapitalize="none"
            errorText="Por favor, ingrese una contraseña válida"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Button
              //title={isSingUp ? "REGISTRARME" : "LOGIN"}
              title="Registrarme"
              color={COLORS.principal}
              onPress={handleSignUp}
            />
          </View>
          <View>
            <Button
              //title={`Cambiar a ${!isSingUp ? "Registrame" : "Login"}`}
              title="Comenzar"
              color={COLORS.secundario}
              onPress={() => setIsSignUp((prevState) => !prevState)}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    //fontFamily: "open-sans-bold",
    marginBottom: 18,
  },
  container: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    height: "50%",
    maxHeight: 400,
    padding: 12,
  },
  footer: {
    marginTop: 42,
  },
  button: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})