import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    catlist = ["Toyato", "Hyundai", "BMW", "RollsRoyals", "Maruthi"]

    ceolist = [
        {
            id: 1,
            Name: "CEO 1",
            CompanyName:"Company 1"
        },
        {
            id: 2,
            Name: "CEO 2",
            CompanyName:"Company 2"
        },
        {
            id: 3,
            Name: "CEO 3",
            CompanyName:"Company 3"
        },
        {
            id: 4,
            Name: "CEO 4",
            CompanyName:"Company 4"
        }
    ]
}