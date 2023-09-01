export const traducirError = (textoError)=> {
    switch(textoError){
        case 'auth/weak-password':
            return ' La contreseña debe tener al menos 6 caracteres'
            break;
        case 'auth/email-already-in-use':
            return 'El correo ya esta registrado en el sistema'    
            break;
        case 'auth/user-not-found':
            return " Usuario no encontrado";
            break;
        default:
                return textoError;    
    }
}