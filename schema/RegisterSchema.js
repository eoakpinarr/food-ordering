import * as Yup from 'yup'

export const RegisterSchema = Yup.object({
    fullName: Yup.string().required("İsim girmek zorunludur.")
        .min(3, "İsim 3 karakterden az olamaz"),
    email: Yup.string().required("E Mail zorunludur.")
        .email("E mail adresi geçersiz."),
    password: Yup.string().required("Şifre zorunludur.")
        .min(8, "Şifre en az 8 karakter içermelidir.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Şifre bir büyük karakter, bir küçük karakter, bir sayı ve bir özel karakter içermelidir."
        ),
    confirmPassword: Yup.string().required("Şifrenizi tekrar giriniz.")
        .oneOf([Yup.ref('password'), null], "Şifreler aynı değil")
})