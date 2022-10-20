const ordenGenerada = (nombre, email, telefono,direccion, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono,
            direccion: direccion
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleDateString()
    }
}
export default ordenGenerada;