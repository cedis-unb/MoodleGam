const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key']

  if (!apiKey) {
    return res.status(401).json({
      message: 'Acesso negado. Nenhuma chave de API fornecida.',
    })
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({
      message: 'Acesso negado. Chave de API inválida',
    })
  }

  next()
}

export default apiKeyAuth
