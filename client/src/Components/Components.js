import React, { Component } from 'react';
import Accordion from 'carbon-components-react/dist/components/Accordion';
import AccordionItem from 'carbon-components-react/dist/components/AccordionItem';
import Breadcrumb from 'carbon-components-react/dist/components/Breadcrumb';
import BreadcrumbItem from 'carbon-components-react/dist/components/BreadcrumbItem';
import Button from 'carbon-components-react/dist/components/Button';
import Card from 'carbon-components-react/dist/components/Card';
import CardFooter from 'carbon-components-react/dist/components/CardFooter';
import CardContent from 'carbon-components-react/dist/components/CardContent';
import Checkbox from 'carbon-components-react/dist/components/Checkbox';
import CodeSnippet from 'carbon-components-react/dist/components/CodeSnippet';
import ContentSwitcher from 'carbon-components-react/dist/components/ContentSwitcher';
import Dropdown from 'carbon-components-react/dist/components/Dropdown';
import DropdownItem from 'carbon-components-react/dist/components/DropdownItem';
import FileUploader from 'carbon-components-react/dist/components/FileUploader';
import Footer from 'carbon-components-react/dist/components/Footer';
import FormGroup from 'carbon-components-react/dist/components/FormGroup';
import InteriorLeftNav from 'carbon-components-react/dist/components/InteriorLeftNav';
import InteriorLeftNavItem from 'carbon-components-react/dist/components/InteriorLeftNavItem';
import InteriorLeftNavList from 'carbon-components-react/dist/components/InteriorLeftNavList';
import Link from 'carbon-components-react/dist/components/Link';
import ListItem from 'carbon-components-react/dist/components/ListItem';
import Loading from 'carbon-components-react/dist/components/Loading';
import Modal from 'carbon-components-react/dist/components/Modal';
import ModalWrapper from 'carbon-components-react/dist/components/ModalWrapper';
import {
  Module,
  ModuleHeader,
  ModuleBody,
} from 'carbon-components-react/dist/components/Module';
import Notification from 'carbon-components-react/dist/components/Notification';
import NumberInput from 'carbon-components-react/dist/components/NumberInput';
import OrderedList from 'carbon-components-react/dist/components/OrderedList';
import OverflowMenu from 'carbon-components-react/dist/components/OverflowMenu';
import OverflowMenuItem from 'carbon-components-react/dist/components/OverflowMenuItem';
import Pagination from 'carbon-components-react/dist/components/Pagination';
import {
  ProgressIndicator,
  ProgressStep,
} from 'carbon-components-react/dist/components/ProgressIndicator';
import RadioButtonGroup from 'carbon-components-react/dist/components/RadioButtonGroup';
import RadioButton from 'carbon-components-react/dist/components/RadioButton';
import Search from 'carbon-components-react/dist/components/Search';
import Select from 'carbon-components-react/dist/components/Select';
import SelectItem from 'carbon-components-react/dist/components/SelectItem';
import SelectItemGroup from 'carbon-components-react/dist/components/SelectItemGroup';
import Switch from 'carbon-components-react/dist/components/Switch';
import Tab from 'carbon-components-react/dist/components/Tab';
import Tabs from 'carbon-components-react/dist/components/Tabs';
import Tag, { types } from 'carbon-components-react/dist/components/Tag';
import TextArea from 'carbon-components-react/dist/components/TextArea';
import TextInput from 'carbon-components-react/dist/components/TextInput';
import Toggle from 'carbon-components-react/dist/components/Toggle';
import TooltipSimple from 'carbon-components-react/dist/components/TooltipSimple';
import UnorderedList from 'carbon-components-react/dist/components/UnorderedList';

export default class Components extends Component {
  render() {
    console.log(types);
    return (
      <div className="components">
        <div className="component__container">
          <Accordion>
            <AccordionItem title="Label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionItem>
            <AccordionItem title="Label with multiple words">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionItem>
          </Accordion>
        </div>

        <div className="component__container">
          <Breadcrumb>
            <BreadcrumbItem href="www.google.com">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="www.google.com">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="www.google.com">Breadcrumb 3</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="component__container">
          <Button>
            Primary Button
          </Button>
          <Button kind="secondary">
            Secondary Button
          </Button>
          <Button small>
            Small Button
          </Button>
          <Button disabled>Disabled</Button>
          <Button icon="search" iconDescription="Search">With an Icon</Button>
          <Button kind="secondary" icon="search" iconDescription="Search">
            With an Icon
          </Button>
          <Button kind="danger" className="some-class">
            Danger Button
          </Button>
        </div>

        <div className="component__container">
          <Card>
            <CardContent
              cardTitle="Card Name"
              cardIcon="app-services"
              cardInfo={['Secondary Information']}
            />
            <CardFooter>
              <Button small kind="primary">View credentials</Button>
              <Link href="#" className="bx--card-footer__link">Link</Link>
            </CardFooter>
          </Card>
        </div>

        <div className="component__container">
          <fieldset className="bx--fieldset">
            <legend className="bx--label">Favorite Colors</legend>
            <Checkbox defaultChecked id="red" labelText="Red" />
            <Checkbox defaultChecked id="blue" labelText="Blue" />
          </fieldset>
        </div>

        <div className="component__container">
          <CodeSnippet type="terminal">
            {
              'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'
            }
          </CodeSnippet>

          <CodeSnippet type="code">
            {`@mixin bx--snippet($type) {
  @if $type == 'terminal' {
    background-color: red;
  } @else if $type == 'code' {
    background-color: blue;
  } @else if $type == 'text' {
    background-color: white;
  }

  @if $type == 'terminal' {
    background-color: red;
  } @else if $type == 'code' {
    background-color: blue;
  } @else if $type == 'text' {
    background-color: white;
  }
}
              `}
          </CodeSnippet>
        </div>

        <div className="component__container">
          <ContentSwitcher
            selectedIndex={1}
            onChange={() => console.log('change')}
          >
            <Switch kind="anchor" name="one" text="First section" />
            <Switch kind="anchor" name="two" text="Second section" />
            <Switch kind="anchor" name="three" text="Third section" />
          </ContentSwitcher>
        </div>

        <div className="component__container">
          Data Table
        </div>

        <div className="component__container">
          <Dropdown defaultText="Choose something..">
            <DropdownItem itemText="All" value="all" />
            <DropdownItem itemText="Cloud Foundry API" value="cloudFoundry" />
            <DropdownItem itemText="Staging" value="staging" />
            <DropdownItem itemText="Droplet Execution Agent" value="dea" />
            <DropdownItem itemText="Router" value="router" />
          </Dropdown>
        </div>

        <div className="component__container">
          <FileUploader
            className="some-class"
            id="file-1"
            labelDescription="Choose Files..."
          />
        </div>

        <div className="component__container">
          <Footer />
        </div>

        <div className="component__container">
          <InteriorLeftNav>
            <InteriorLeftNavList title="Example Item 1">
              <InteriorLeftNavItem
                href="#example-item-1A"
                label="Example Item 1A"
              />
              <InteriorLeftNavItem
                href="#example-item-1B"
                label="Example Item 1B"
              />
              <InteriorLeftNavItem
                href="#example-item-1C"
                label="Example Item 1C"
              />
              <InteriorLeftNavItem
                href="#example-item-1D"
                label="Example Item 1D"
              />
            </InteriorLeftNavList>
            <InteriorLeftNavList title="Example Item 2">
              <InteriorLeftNavItem
                href="#example-item-2A"
                label="Example Item 2A"
              />
              <InteriorLeftNavItem
                href="#example-item-2B"
                label="Example Item 2B"
              />
              <InteriorLeftNavItem
                href="#example-item-2C"
                label="Example Item 2C"
              />
              <InteriorLeftNavItem
                href="#example-item-2D"
                label="Example Item 2D"
              />
            </InteriorLeftNavList>
            <InteriorLeftNavItem
              href="#example-item-3"
              label="Example Item 3"
            />
            <InteriorLeftNavItem
              href="#example-item-4"
              label="Example Item 4"
            />
          </InteriorLeftNav>
        </div>

        <div className="component__container">
          <Link href="#">A simple link</Link>
        </div>

        <div className="component__container">
          <OrderedList>
            <ListItem>
              Ordered List level 1
              <OrderedList nested>
                <ListItem>Ordered List level 2</ListItem>
                <ListItem>Ordered List level 2</ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>Ordered List level 1</ListItem>
            <ListItem>Ordered List level 1</ListItem>
          </OrderedList>

          <UnorderedList>
            <ListItem>
              Unordered List level 1
              <UnorderedList nested>
                <ListItem>Unordered List level 2</ListItem>
                <ListItem>Unordered List level 2</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>Unordered List level 1</ListItem>
            <ListItem>Unordered List level 1</ListItem>
          </UnorderedList>
        </div>

        <div className="component__container">
          <Loading withOverlay={false} />
        </div>

        <div className="component__container">
          Modal
        </div>

        <div className="component__container">
          <Module className="some-class" size="single">
            <ModuleHeader>Module Example</ModuleHeader>
            <ModuleBody>
              <p>
                Lorem Ipsum is dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </ModuleBody>
          </Module>

          <Module className="some-class">
            <ModuleHeader>Module Example</ModuleHeader>
            <ModuleBody>
              <p>
                Lorem Ipsum is dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </ModuleBody>
          </Module>
        </div>

        <div className="component__container component__container--notification">
          <div>
            <Notification
              title="Warning notification:"
              subtitle="Here is a clear explanation of the warning"
              kind="warning"
            />
            <Notification
              title="Informational notification:"
              subtitle="Here is the information or directions"
              kind="info"
            />
            <Notification
              title="Error notification:"
              subtitle="Here is a clear explanation of the error"
              kind="error"
            />
            <Notification
              title="Success notification:"
              subtitle="Here is the information or directions"
              kind="success"
            />

          </div>
          <div>
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="warning"
            />
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="info"
            />
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="error"
            />
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="success"
            />
          </div>
        </div>

        <div className="component__container">
          <NumberInput id="number-input" />
        </div>

        <div className="component__container">
          <OverflowMenu>
            <OverflowMenuItem itemText="Stop App" />
            <OverflowMenuItem itemText="Restart App" />
            <OverflowMenuItem itemText="Rename App" />
            <OverflowMenuItem itemText="Edit Routes and Access" />
            <OverflowMenuItem itemText="Delete App" hasDivider isDelete />
          </OverflowMenu>
        </div>

        <div className="component__container">
          <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={103} />
        </div>

        <div className="component__container">
          <ProgressIndicator currentIndex={3}>
            <ProgressStep
              label="Step 1"
              description="Step 1: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 2"
              description="Step 2: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 3"
              description="Step 3: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 4"
              description="Step 4: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 5"
              description="Step 5: Getting Started with Node.js"
            />
          </ProgressIndicator>
        </div>

        <div className="component__container">
          <FormGroup legendText="Radio Group">
            <RadioButtonGroup
              name="radio-button-group"
              defaultSelected="default-selected"
              legend="Group Legend"
            >
              <RadioButton
                value="standard"
                id="radio-1"
                labelText="Standard Radio Button"
              />
              <RadioButton
                value="default-selected"
                labelText="Default Selected Radio Button"
                id="radio-2"
              />
              <RadioButton
                value="disabled"
                labelText="Disabled Radio Button"
                id="radio-3"
                disabled
              />
            </RadioButtonGroup>
          </FormGroup>
        </div>

        <div className="component__container">
          <Search
            id="search-1"
            labelText="Search"
            placeHolderText="Enter search text here..."
          />

          <Search
            small
            id="search-2"
            labelText="Search"
            placeHolderText="Enter search text here..."
          />
        </div>

        <div className="component__container">
          <Select id="select-1" defaultValue="placeholder-item">
            <SelectItemGroup label="Starter">
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </SelectItemGroup>
            <SelectItemGroup label="Advanced">
              <SelectItem value="option-3" text="Option 3" />
            </SelectItemGroup>
          </Select>
        </div>

        <div className="component__container">
          <Tabs>
            <Tab label="Overview">
              <div>Overview Content</div>
            </Tab>
            <Tab label="Apple">
              <div>Apple Content</div>
            </Tab>
            <Tab label="Banana">
              <div>Banana Content</div>
            </Tab>
            <Tab label="Orange">
              <div>Orange Content</div>
            </Tab>
          </Tabs>
        </div>

        <div className="component__container">
          {types.map(type => (
            <Tag key={type} className="some-class" type={type} />
          ))}
        </div>

        <div className="component__container">
          <TextArea />
        </div>

        <div className="component__container">
          <TextInput placeholder="Hint text here" id="text-input" />
        </div>

        <div className="component__container">
          <Toggle id="toggle" />
        </div>

        <div className="component__container">
          <TooltipSimple text="hello">
            <Link href="#">Tooltip - hover</Link>
          </TooltipSimple>
        </div>

      </div>
    );
  }
}
