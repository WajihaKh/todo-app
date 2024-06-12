import { useContext, useState } from 'react';
import SettingsContext from './index';
import { Card, Grid, Switch, Button, NumberInput, TextInput} from '@mantine/core';

const SettingsForm = () => {
  const { itemsPerPage, hideCompleted, saveSettings, sort } = useContext(SettingsContext);
  const [newItemsPerPage, setNewItemsPerPage] = useState(itemsPerPage);
  const [newHideCompleted, setNewHideCompleted] = useState(hideCompleted);
  const [ newSort, setNewSort ] = useState(sort)

  const handleSave = () => {
    saveSettings({ itemsPerPage: newItemsPerPage, hideCompleted: newHideCompleted, sort: newSort});
  };
  

  return (
    <Card shadow="sm" padding="lg">
      <Grid>
        <Grid.Col span={6}>
          <Switch
            label="Show Completed ToDos"
            checked={!newHideCompleted}
            onChange={(event) => setNewHideCompleted(!event.currentTarget.checked)}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <NumberInput
            label="Items Per Page"
            value={newItemsPerPage}
            onChange={setNewItemsPerPage}
            min={1}
          />
        </Grid.Col>
        <Grid.Col span={6}>
            <TextInput
            label="difficulty"
            value={newSort}
            onChange={(event) => setNewSort(event.currentTarget.value)}
            />

        </Grid.Col>
      </Grid>
      <Button onClick={handleSave} mt="md">Save Settings</Button>
    </Card>
  );
};

export default SettingsForm;
