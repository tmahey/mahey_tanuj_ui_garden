import React from 'react';
import styled from 'styled-components';
import { Button } from './components/Button/Index';
import { Label } from './components/Label/Index';
import { Text } from './components/Text/Index';
import { Table } from './components/Table/Index';
import { TableHeader } from './components/TableHeader/Index';
import { TableRow } from './components/TableRow/Index';
import { TableCell } from './components/TableCell/Index';
import { TableFooter } from './components/TableFooter/Index';
import { Dropdown } from './components/Dropdown/Index';
import { RadioButton } from './components/RadioButton/Index';
import { Img } from './components/Img/Index';
import { HeroImage } from './components/HeroImage/Index';
import { Card } from './components/Card/Index';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 24px;
  border-radius: 8px;
  background-color: #fafbfc;
  border: 1px solid #e1e4e8;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: #24292e;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Container>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ margin: 0 }}>UI Garden Component Library Showcase</h1>
        <p style={{ color: '#586069' }}>Running on port 8083 in production Docker container</p>
      </header>

      {/* Hero Banner */}
      <Section>
        <SectionTitle>1. HeroImage Component</SectionTitle>
        <FlexRow>
          <HeroImage title="Welcome to UI Garden" subtitle="Assignment 12 Component Toolkit" />
        </FlexRow>
      </Section>

      {/* Buttons */}
      <Section>
        <SectionTitle>2. Button Component</SectionTitle>
        <FlexRow>
          <Button text="Active Button" />
          <Button text="Custom Color" />
          <Button text="Disabled Button" disabled={true} />
        </FlexRow>
      </Section>

      {/* Labels & Text */}
      <Section>
        <SectionTitle>3. Label & Text Components</SectionTitle>
        <FlexRow>
          <Label text="Active Label" />
          <Label text="Disabled Label" disabled={true} />
        </FlexRow>
        <div style={{ marginTop: '16px' }}>
          <Text content="This is active body text rendered using styled-components." />
          <Text content="This is disabled body text with dimmed styling." disabled={true} />
        </div>
      </Section>

      {/* Interactive Controls */}
      <Section>
        <SectionTitle>4. Dropdown & RadioButton Components</SectionTitle>
        <FlexRow>
          <Dropdown
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
            ]}
          />
          <Dropdown
            disabled={true}
            options={[{ value: 'none', label: 'Disabled Selector' }]}
          />
          <RadioButton label="Active Option" checked={true} />
          <RadioButton label="Disabled Option" disabled={true} />
        </FlexRow>
      </Section>

      {/* Card & Img */}
      <Section>
        <SectionTitle>5. Card & Img Components</SectionTitle>
        <FlexRow>
          <Card title="Active Card" content="Interactive card with hover-ready box shadow." />
          <Card title="Disabled Card" content="Disabled state card with muted tone." disabled={true} />
          <Img alt="UI Garden Image" />
        </FlexRow>
      </Section>

      {/* Table Components */}
      <Section>
        <SectionTitle>6. Table, Header, Row, Cell & Footer Components</SectionTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Component Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Button</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User Action</TableCell>
            </TableRow>
            <TableRow disabled={true}>
              <TableCell>Deprecated Widget</TableCell>
              <TableCell>Disabled</TableCell>
              <TableCell>Inactive Row</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell>Total Components</TableCell>
              <TableCell>13</TableCell>
              <TableCell>100% Tested</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </Container>
  );
}

export default App;
