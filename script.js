google.charts.load('current', { packages: ["orgchart"] });
google.charts.setOnLoadCallback(drawAllChart);

const raw_data = [
    {
        "name": "CT Productivity & Impact",
        "children": [
            {
                "name": "Deliver exceptional, personalized productivity tools & related experiences\r\n",
                "children": [
                    {
                        "name": "Microsoft Office Upgrades",
                        "children": [
                            {
                                "name": "Realtek Audio Driver to fix the BSOD Bug check(DRIVER_POWER_STATE_FAILURE- 0x9f)",
                                "children": [
                                    {
                                        "name": "KR1",
                                        "type": "%",
                                        "baseline": "1",
                                        "target": "2",
                                        "current": "13"
                                    },
                                    {
                                        "name": "KR2",
                                        "type": "Count",
                                        "baseline": "1",
                                        "target": "2",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "MAPC_Secure Mac Environment",
                        "children": [
                            {
                                "name": "Obj2",
                                "children": [
                                    {
                                        "name": "KR",
                                        "type": "%",
                                        "baseline": "1",
                                        "target": "2",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "PP 2023 User Experience and Performance",
                        "children": [
                            {
                                "name": "Improve deployment Cycle time",
                                "children": [
                                    {
                                        "name": "Improve driver cycle time",
                                        "type": "%",
                                        "baseline": "10",
                                        "target": "90",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "testt",
                        "children": [
                            {
                                "name": "Test44444",
                                "children": [
                                    {
                                        "name": "Test44444",
                                        "type": "Score",
                                        "baseline": "10",
                                        "target": "20",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Continuously modernize device & application management\r\n",
                "children": [
                    {
                        "name": "This is ideation1",
                        "children": [
                            {
                                "name": "ff",
                                "children": [
                                    {
                                        "name": "fff",
                                        "type": "Count",
                                        "baseline": "12",
                                        "target": "2",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Talent & EVP",
        "children": [
            {
                "name": "Continuously modernize device & application management\r\n",
                "children": [
                    {
                        "name": "This is a new initiative for QUAD1",
                        "children": [
                            {
                                "name": "Test obj",
                                "children": [
                                    {
                                        "name": "Test KR1",
                                        "type": "%",
                                        "baseline": "3",
                                        "target": "2",
                                        "current": "13"
                                    },
                                    {
                                        "name": "Test KR2",
                                        "type": "NPS",
                                        "baseline": "4",
                                        "target": "5",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Scale & Digitization",
        "children": [
            {
                "name": "Operational excellence\u200b",
                "children": [
                    {
                        "name": "Application Release Management",
                        "children": [
                            {
                                "name": "Improve Cycle time",
                                "children": [
                                    {
                                        "name": "Improve Cycle time 5%",
                                        "type": "%",
                                        "baseline": "11",
                                        "target": "22",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Continuously modernize device & application management\r\n",
                "children": [
                    {
                        "name": "new",
                        "children": [
                            {
                                "name": "asda",
                                "children": [
                                    {
                                        "name": "asda",
                                        "type": "Count",
                                        "baseline": "12",
                                        "target": "2",
                                        "current": "13"
                                    },
                                    {
                                        "name": "q",
                                        "type": "%",
                                        "baseline": "11",
                                        "target": "12",
                                        "current": "13"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

function drawChart(parent_node) {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Name');
    data.addColumn('string', 'Parent');
    data.addColumn('string', 'ToolTip');

    const rows = [];

    function parseNode(node, parent) {
        const html = `
            <div style="padding:5px;">
                ${node.name ? `<b>${node.name}</b><br><br>` : ''}
                ${node.type ? `<b>Type:</b> ${node.type}<br>` : ''}
                ${node.baseline ? `<b>Baseline:</b> ${node.baseline}<br>` : ''}
                ${node.target ? `<b>Target:</b> ${node.target}<br>` : ''}
                ${node.current ? `<b>Current:</b> ${node.current}` : ''}
            </div>`;
        rows.push([{
            v: node.name,
            f: html
        }, parent, '']);
        if (node.children) {
            node.children.forEach(child => {
                parseNode(child, node.name);
            });
        }
    }

    parseNode(parent_node, null);

    console.log(rows);

    data.addRows(rows);


    // Create the chart.
    const charts = document.getElementById('charts')
    const chart_div = document.createElement('div');
    charts.appendChild(chart_div);
    var chart = new google.visualization.OrgChart(chart_div);
    // Draw the chart, setting the allowHtml option to true for the tooltips.
    chart.draw(data, { 'allowHtml': true });
}

function drawAllChart() {
    raw_data.forEach(data => {
        drawChart(data);
    })
}