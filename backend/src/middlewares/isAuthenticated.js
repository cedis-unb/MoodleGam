import jwt from 'jsonwebtoken'

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token JWT não fornecido.',
    })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    const { sub } = decodedToken

    req.user = {
      id: sub,
    }

    return next()
  } catch (error) {
    return res.status(400).json({
      message: 'Token inválido',
    })
  }
}

export default isAuthenticated
