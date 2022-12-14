import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async (_, { email, password }, ctx) => {
  try {
    const userModel = ctx.db.model('user')

    let user = await userModel.findOne({ email }).lean()

    if (user) {
      throw new Error('Email is already taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    user = await userModel.create({
      email,
      password: hashedPassword,
    })

    const token = jwt.sign({ userId: user._id }, process.env.AUTH_SECRET)

    return { token, user }
  } catch (err) {
    throw new Error(err)
  }
}
