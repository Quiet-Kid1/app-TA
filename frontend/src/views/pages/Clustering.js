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

const Clustering = () => {
  const allData = [
    'We have been informed by the Maldives International Health Regulation, as a protocol both me and my husband will have to be self quarantine for 14 days at our own expenses in Maldives.',
    "You can also divert the flight to other Airport in the country Like in #Davao, #Clark, #CagayandeOro, & etc. just to follow the gov't health protocol.",
    "This is a hard time for most of us. Let's take care of each other and spread awareness to maintain health protocol",
    'The health department has proposed to escalate the COVID-19 vaccination drive by reducing the age limit of eligible beneficiaries from 60 years to 50 years, even as rampant violation of COVID-19 protocol in the form of public interface in physical form continues to be the order',
    'If he’s been following minimum health protocol then why was there a need for him to get swab tested 56 times?',
    'We can fight the virus by following the health protocol set by the Department of Health, consuming a healthy diet, and getting vaccinated (if you have health issues, see your doctor for some advice to ease your fears)',
    'The Biden administration must reverse course. There are three simple solutions: 1. Reapply the public health declaration to all foreign nationals—including minors. 2. Renegotiate a migrant protection protocol with Mexico. 3. Reenter a safe third country agreement with Guatemala.',
    'Next we will be moaning one of them.Where health protocol they talk about jameni',
    'Third wave of COVID-19 is lethal. Let us observe and follow protocol put in place by ministery of health',
    "If an individual is driving his/her car all alone why should he or she wear the mask?Please clear the message or it's going to be against health protocol.",
  ];

  const rows = allData.map(data => {
    return {
      tweet: data,
      manual: 'none',
      otomatis: 'none',
      edit: 'none',
      delete: 'none',
    };
  });

  const columns = [
    {
      label: 'Tweet',
      name: 'tweet',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Label Manual',
      name: 'manual',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Label Otomatis',
      name: 'otomatis',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Ubah',
      name: 'edit',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      label: 'Hapus',
      name: 'delete',
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
                <h3 className="mb-0">Data Training</h3>
              </CardHeader>
              <MUIDataTable data={rows} columns={columns} />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Clustering;
