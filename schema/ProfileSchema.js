import * as Yup from 'yup'

export const ProfileSchema = Yup.object({
    fullName: Yup.string().required("İsim girmek zorunludur.")
        .min(3, "İsim 3 karakterden az olamaz"),
        phoneNumber: Yup.string().required("Telefon numarası zorunludur.")
        .min(10, "Telefon numarası 10 haneli olmalıdır."),
        email: Yup.string().required("E Mail zorunludur.")
        .email("E mail adresi geçersiz."),
        job: Yup.string().required("Meslek girmek zorunludur."),
        bio: Yup.string().required("Biografi girilmesi zorunludur"),
        address: Yup.string().required("Adres girilmesi zorunludur")

        
})