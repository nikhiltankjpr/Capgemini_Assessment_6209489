import {test} from '@playwright/test'
import career from '../pom/career.page.ts'
import fs from "fs"
import path from "path"
import careeers from '../pom/career.page.ts'
let dataitem = fs.readFileSync(path.join(__dirname, "../data/data.json"))
let data = JSON.parse(dataitem)

test("Amazon career page", async ({page}) => {
    const career = new careeers(page)
    await career.launchUrl(data.url)
    await career.clickCareer()
    await career.clickFindRole()
    // await page.waitForTimeout(2000);
    await career.selectUniversityRoleAndSwitch()



      await career.selectFilter(0, data.Country)
    await career.selectFilter(1, data.state)
    await career.selectFilter(2, data.city)


    await career.selectFilter(3, data["Emp-type"])
    await career.selectFilter(4, data.category)



    await career.selectFilter(5, data["career-area"])
    await career.selectFilter(6, data.team)


    
    await career.selectFilter(7, data["role-type"])



    // await career.selectFilter(0, data.Country)
    // await career.selectFilter(1, data.state)
    // await career.selectFilter(2, data.city)
    // await career.selectFilter(3, data["Emp-type"])
    // await career.selectFilter(4, data.category)
    // await career.selectFilter(5, data["career-area"])
    // await career.selectFilter(6, data.team)
    // await career.selectFilter(7, data["role-type"])

    const newPage = await career.selectJob()
    await career.applyJob(newPage)
await page.waitForTimeout(2000)
    await career.takeScreenshot()

    await page.waitForTimeout(2000)
})