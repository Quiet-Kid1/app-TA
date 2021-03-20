import React from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import Header from 'components/Headers/Header.js';
import { Card, CardHeader, Container, Row } from 'reactstrap';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Visualization = () => {
  const options = {
    exportEnabled: false,
    animationEnabled: true,
    title: {
      text: 'Grafik Data',
    },
    data: [
      {
        type: 'pie',
        startAngle: 75,
        toolTipContent: '<b>{label}</b>: {y}%',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label} - {y}%',
        dataPoints: [
          { y: 40, label: 'Setuju' },
          { y: 35, label: 'Tidak Setuju' },
          { y: 25, label: 'Netral' },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">
                  Visualisasi Emosi Terhadap Protokol Kesehatan
                </h3>
              </CardHeader>
              <CanvasJSChart
                options={options}
                /* onRef={ref => this.chart = ref} */
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Visualization;
