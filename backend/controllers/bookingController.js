import Booking from "../models/Booking.js"


// create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);

    try {
        const saveBooking = await newBooking.save();

        res.status(200).json({
            success: true,
            message: 'Your tour is booked',
            data: saveBooking,
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
        })
    }
}

// get single bookng
export const getBooking = async(req, res) => {
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: book,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        })
    }
}

// get all bookng
export const getAllBooking = async(req, res) => {

    try {
        const books = await Booking.find();

        res.status(200).json({
            success: true,
            message: "Successfully",
            data: books,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        })
    }
}