import User from "../models/userModels.js";

export const getUser = async(req,res)=>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getUserByID = async(req,res)=>{
    try {
        const response = await User.findOne({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}


export const createUser = async (req, res) => {
    try {
        // Dapatkan data dari body permintaan
        const { name, email, password, gender } = req.body;

        // Buat pengguna baru menggunakan model User
        const newUser = await user.create({ name, email, password, gender });

        // Kirim respons jika pengguna berhasil dibuat
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        // Tangani kesalahan jika ada kesalahan saat membuat pengguna
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
