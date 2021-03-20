/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';

// reactstrap components
import { Card, CardHeader, Container, Row } from 'reactstrap';
// core components
import Header from 'components/Headers/Header.js';
import MUIDataTable from 'mui-datatables';

const TF = () => {
  const allData = [];

  const rows = allData.map(data => {
    return {
      kata: data,
      nilai: 'none',
    };
  });

  const columns = [
    {
      label: 'Kata',
      name: 'kata',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Nilai',
      name: 'nilai',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

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
                <h3 className="mb-0">Bobot Kata</h3>
              </CardHeader>
              <MUIDataTable data={rows} columns={columns} />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default TF;
