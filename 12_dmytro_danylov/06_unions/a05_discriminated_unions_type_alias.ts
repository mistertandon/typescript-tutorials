/**
 * CMD to run this file
 *
 *  ./../node_modules/.bin/ts-node a05_discriminated_unions_type_alias.ts
 */
namespace DiscriminatedUnionTypeAliasNS {
  interface IFullTimeEmployee {
    type: "FULL_TIME";
    name: string;
    annualSalary: number;
  }

  interface IPartTimeEmployee {
    type: "PART_TIME";
    name: string;
    monthlySalary: number;
  }

  interface IC2HEmployee {
    type: "C2H";
    name: string;
    hourlySalary: number;
  }

  type EmployeeType = IFullTimeEmployee | IPartTimeEmployee | IC2HEmployee;

  function getSalary(employee: EmployeeType): number | null {
    switch (employee.type) {
      case "FULL_TIME":
        return employee.annualSalary;
        break;

      case "PART_TIME":
        return employee.monthlySalary;
        break;

      case "C2H":
        return employee.hourlySalary;
        break;

      default:
        return null;
    }
  }
  let fullTimeEmp: IFullTimeEmployee = {
    type: "FULL_TIME",
    name: "John",
    annualSalary: 10000000,
  };
  const fullTimeEmpSalary: number = getSalary(fullTimeEmp);
  console.log(`Full time employee salary: ${fullTimeEmpSalary}`);
}
