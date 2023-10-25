import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

export function SignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
