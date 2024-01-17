import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export async function SignUp(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
