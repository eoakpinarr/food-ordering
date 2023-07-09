import * as Yup from 'yup'

export const NewPassword = Yup.object({
    password: Yup.string().required("Şifre zorunludur.")
        .min(8, "Şifre en az 8 karakter içermelidir.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/,
            "Şifre bir büyük karakter, bir küçük karakter, bir sayı ve bir özel karakter içermelidir."
        ),
    confirmPassword: Yup.string().required("Şifrenizi tekrar giriniz.")
        .oneOf([Yup.ref('password'), null], "Şifreler aynı değil")
})