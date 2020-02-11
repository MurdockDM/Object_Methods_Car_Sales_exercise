import salesByWeek from "./data.js"


const weeklyReportBox = document.getElementById("weekly_report_container")


const reportHTMLComponent = (salesByWeek) =>{
    salesByWeek.forEach(sale => {
        weeklyReportBox.innerHTML += `<hr/>`
        
        weeklyReportBox.innerHTML += `<h3>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h3>`

        for (const entry of Object.entries(sale.vehicle)) {
            weeklyReportBox.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
        }
        weeklyReportBox.innerHTML +=`<p>Profit: $${sale.gross_profit}</p>`
    })
        
}        

export default reportHTMLComponent
