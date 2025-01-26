import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DuesManager({ dues, onChange }) {
  const [newDueType, setNewDueType] = useState < FeeType > FEE_TYPES[0];
  const [newDueAmount, setNewDueAmount] = useState("");

  const addDue = () => {
    if (newDueType && newDueAmount) {
      const newDues = [
        ...dues,
        { type: newDueType, amount: Number.parseFloat(newDueAmount) },
      ];
      onChange(newDues);
      setNewDueType(FEE_TYPES[0]);
      setNewDueAmount("");
    }
  };

  const removeDue = (index) => {
    const newDues = dues.filter((_, i) => i !== index);
    onChange(newDues);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Label htmlFor="dueType">Fee Type</Label>
        <Label htmlFor="dueAmount">Amount</Label>
        <span></span>
        <Select
          value={newDueType}
          onValueChange={(value) => setNewDueType(value)}
        >
          <SelectTrigger id="dueType">
            <SelectValue placeholder="Select fee type" />
          </SelectTrigger>
          <SelectContent>
            {FEE_TYPES.map((feeType) => (
              <SelectItem key={feeType} value={feeType}>
                {feeType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id="dueAmount"
          type="number"
          value={newDueAmount}
          onChange={(e) => setNewDueAmount(e.target.value)}
          placeholder="Amount"
        />
        <Button onClick={addDue} type="button">
          Add Fee
        </Button>
      </div>
      {dues.map((due, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 items-center">
          <span>{due.type}</span>
          <span>{due.amount}</span>
          <Button
            onClick={() => removeDue(index)}
            variant="destructive"
            type="button"
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}
