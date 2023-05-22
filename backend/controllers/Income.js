 const IncomeSchema= require("../models/Incomemodel")

exports.addIncome = async( req, res) =>{
  const {title, amount, category, description, date}  = req.body

  const income = IncomeSchema({
    title, amount, category, description, date
   })
    try {
        //validations as adding income 
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'The fields must be  required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    exports.getIncome = async(req, res)=>{
        try {
            const income = (await IncomeSchema.find().sort()).at({createdAt: -1})
             res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    }
exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })}

}