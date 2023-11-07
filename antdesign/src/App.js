import "./App.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import Formant from "./components/Formant";
import Qcode from "./components/Qcode";
import Water from "./components/Water";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

function App() {
  return (
    <div className="App">
      <DatePicker />
      <Space direction="vertical" size={12}>
        <DatePicker defaultValue={dayjs("2015-06-06", dateFormat)} disabled />
        <DatePicker
          picker="month"
          defaultValue={dayjs("2015-06", "YYYY-MM")}
          disabled
        />
        <RangePicker
          defaultValue={[
            dayjs("2015-06-06", dateFormat),
            dayjs("2015-06-06", dateFormat),
          ]}
          disabled
        />
        <RangePicker
          defaultValue={[
            dayjs("2019-09-03", dateFormat),
            dayjs("2019-11-22", dateFormat),
          ]}
          disabled={[false, true]}
        />
      </Space>
      <Flex gap="small" vertical>
        <Flex wrap="wrap" gap="small">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Flex>
        <Flex wrap="wrap" gap="small">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </Flex>
      </Flex>
      <AppleOutlined spin={true} />
      <Formant />
      <Qcode />
      <Water />
    </div>
  );
}

export default App;
