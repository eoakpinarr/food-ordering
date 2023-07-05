import * as Yup from 'yup'

export const AdminSchema = Yup.object({
        username: Yup.string().required("Kullanıcı adı zorunludur.")
        .min(3, "Kullanıcı adı en az 3 karakter içermelidir."),
        password: Yup.string().required("Şifre zorunludur.")
                .min(8, "Şifre en az 8 karakter içermelidir.")
                .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        "Şifre bir büyük karakter, bir küçük karakter, bir sayı ve bir özel karakter içermelidir."
                ),
})