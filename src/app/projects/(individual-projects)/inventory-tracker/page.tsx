import IndividualProjects from "../_components/IndividualProjects";

function InventoryTracker() {
  return (
    <>
      <IndividualProjects
        githubLink="https://github.com/ThomasVy/InventoryTracker"
        title="Inventory Tracker"
      >
        <p>
          A inventory/purchases tracker for small merchants to keep track of
          their sales, trends in sales, and manage their inventories. <br />
          Written in React, TypeScript, Zod, Express, NodeJs, MongoDB, Tanstack
          Query, Data Access Objects, Material UI.
        </p>
      </IndividualProjects>
    </>
  );
}
export default InventoryTracker;
