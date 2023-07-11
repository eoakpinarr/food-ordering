import * as Yup from 'yup'

export const AdminFooterSchema = Yup.object({
    location: Yup.string().required("Konum girmek zorunludur."),
        phoneNumber: Yup.string().required("Telefon numarası zorunludur.")
        .min(10, "Telefon numarası 10 haneli olmalıdır.")
        .max(10, "Telefon numarası 10 haneli olmalıdır."),
        email: Yup.string().required("E Mail zorunludur.")
        .email("E mail adresi geçersiz."),
        desc: Yup.string().required("Açıklama girmek zorunludur."),
        day: Yup.string().required("Gün girilmesi zorunludur"),
        time: Yup.string().required("Saat girilmesi zorunludur")

        
})