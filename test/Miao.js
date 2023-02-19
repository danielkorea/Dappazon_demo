const { expect } = require("chai")
const { ethers } = require("hardhat")
const { describe, it } = require("node:test")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}
describe("Miao",()=>{
    let miao
    let deployer,buyer
    beforeEach(async ()=>{
        [deployer,buyer] = await ethers.getSigners()
       console.log(deployer,buyer); 
        const Miao = await ethers.getContractFactory("Miao")
        miao = await Miao.deploy()
    })
    
})
describe("Deployment",()=>{
    it("sets the owner",async()=>{
        expect(await miao.owner()).to.equal(deploy.address)
    })
    it('has a name',async()=>{
        const name = await miao.name()
        expect(name).to.equal("Miao")
    })
})