import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/', async (req,res) => {
    try {
        const user = req.body

        const userDB = await prisma.user.create({
            data:{
                nome: user.nome,
                email: user.email,
                telefone: user.telefone,
                servico: user.servico,
                mensagem: user.mensagem
        }
    })
    res.status(201).json(userDB)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'ERRO NO SERVIDOR, TENTE NOVAMENTE'})
    }
})

app.listen(3000, () => console.log('API RODANDO'))  