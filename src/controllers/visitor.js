const Visitor = require("../models/Visitor");


class visitorController {
    static create(req, res, next) {
        const {
            queueNumber,
            visitorName,
            email,
            phoneNumber,
            Address,
            patientComplaints,
            doctorName,
            scheduleDate,
            scheduleTime
        } = req.body;
        const visitor = new Visitor({
            queueNumber,
            visitorName,
            email,
            phoneNumber,
            Address,
            patientComplaints,
            doctorName,
            scheduleDate,
            scheduleTime
        });

        visitor
            .save()
            .then((visitor) => {
                res.status(201).json({
                    msg: "Success " + visitor.queueNumber + " has been created !",
                    data: visitor,
                });
            })
            .catch(next);
    }

    static detail(req, res, next) {
        Visitor.findOne({ _id: req.params.id })
          .then((visitor) => {
            res.status(200).json({ data: visitor });
          })
          .catch(next);
      }

      static All(req, res) {
        Visitor.find()
          .then((result) => {
            if (result.length > 0) {
              res
                .status(200)
                .json({
                  message: "Success find all data Visitor !",
                  data: result
                });
            } else {
              {
                name: "All_Visitor_Not_Found"
              };
            }
          })
          .catch((err) => ({
            name: "Fail_Found_All_Visitor"
          }));
      }
    

    static update(req, res) {
        const {
            id
        } = req.params;
        const {
            queueNumber,
            visitorName,
            email,
            phoneNumber,
            Address,
            patientComplaints,
            doctorName,
            scheduleDate,
            scheduleTime
        } = req.body;
        const updatedData = {
            queueNumber,
            visitorName,
            email,
            phoneNumber,
            Address,
            patientComplaints,
            doctorName,
            scheduleDate,
            scheduleTime
        };
        for (const key in updatedData) {
            if (!updatedData[key]) {
                delete updatedData[key];
            }
        }
        Visitor.findByIdAndUpdate(id, updatedData, {
                new: true
            })
            .then((result) => {
                res
                    .status(200)
                    .json({
                        message: "Success Update Data Visitor !",
                        data: result
                    });
            })
            .catch((err) => ({
                name: "Update_Visitor_Fail"
            }));
    }

    static delete(req, res) {
        const {
            id
        } = req.params;

        Visitor.findByIdAndDelete(id)
            .then((result) => {
                res
                    .status(200)
                    .json({
                        message: "Visitor data has been success deleted !",
                        data: result
                    });
            })
            .catch((err) => ({
                name: "Delete_Visitor_Fail"
            }));
    }


}

module.exports = visitorController;