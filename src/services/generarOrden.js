const ordenGenerada = (nombre, email, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            email: email
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleDateString()
    }
}
export default ordenGenerada;