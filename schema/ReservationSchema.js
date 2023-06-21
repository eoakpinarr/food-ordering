import * as Yup from 'yup'

export const ReservationSchema = Yup.object({
    fullName: Yup.string().required("İsim girmek zorunludur.")
        .min(3, "İsim 3 karakterden az olamaz"),
        phoneNumber: Yup.string().required("Telefon numarası zorunludur.")
        .min(10, "Telefon numarası 10 haneli olmalıdır."),
        email: Yup.string().required("E Mail zorunludur.")
        .email("E mail adresi geçersiz."),
        persons: Yup.string().required("Kişi sayısı girmek zorunludur."),
        date: Yup.string().required("Tarih girilmesi zorunludur")
        
})