server: {
    proxy: {
      '/api': {
        target: 'https://creaci-n-imagen-wqcm.onrender.com',  // <-- Pega tu URL aquí
        changeOrigin: true,
        secure: false,
      },
    },
  },