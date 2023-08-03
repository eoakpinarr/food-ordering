import * as Yup from 'yup'

export const AdminSchema = Yup.object({
        username: Yup.string().required("Kullanıcı adı zorunludur.")
        .min(3, "Kullanıcı adı en az 3 karakter içermelidir."),
        password: Yup.string().required("Şifre zorunludur.")
                .min(4, "Şifre en az 4 karakter içermelidir.")

})