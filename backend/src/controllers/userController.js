import { asyncHandler } from "../utils/asyncHandler.js";


const userId = 'john_doe_17091999';
const email = 'john@xyz.com';
const rollNumber = 'ABCD123';

const operation = asyncHandler(async (_, res) => {
   
    return res.status(200).json({
        "operation_code": 1
    });
});

const userResponse = asyncHandler(async(req,res)=>{
    const {data} = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }
    const numbers = data
        .filter(item => !isNaN(item) && !isNaN(Number(item)))
        .map(Number);

    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const lowercaseAlphabets = alphabets.filter(c => c === c.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length
        ? [lowercaseAlphabets.sort().pop()]
        : [];
        res.json({
            is_success: true,
            user_id: userId,
            email,
            roll_number: rollNumber,
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        });
})
export{
    userResponse,
    operation
}


