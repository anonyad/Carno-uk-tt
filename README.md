## Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 21+

### Installation
```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/`

---

## Project Structure

```
src/app/
├── models/
│   ├── board.model.ts          # Core data models (Board, Column, Task)
│   └── widget.model.ts         # Widget system interfaces
├── store/
│   └── tasks/
│       ├── tasks.actions.ts    # NgRx actions (command/event pattern)
│       ├── tasks.feature.ts    # Feature reducer with Entity adapter
│       ├── tasks.selectors.ts  # Memoized selectors
│       └── tasks.effects.ts    # Side effects with error handling
├── services/
│   └── task.service.ts         # API service (currently mocked)
├── components/
│   ├── task-card/              # Presentational task card component
│   └── widgets/                # Widget components (TaskCount, Progress)
├── directives/
│   └── dynamic-widget-outlet.directive.ts  # Dynamic component rendering
└── pages/
    └── task-board/             # Smart container component
```

---

## Architecture Decisions

### 1. **Feature-Based Store Structure**

**Decision:** Use `createFeature()` with `provideState()` instead of global reducers

**Why:**
- ✅ Better code splitting and lazy loading support
- ✅ Auto-generated selectors reduce boilerplate
- ✅ Independent feature modules are easier to test
- ✅ Scales better for multiple boards/features

**Alternative Considered:** Global `ActionReducerMap`
- ❌ Tight coupling between features
- ❌ Harder to lazy load
- ❌ More boilerplate code

**Tradeoff:** Slightly more files, but much better organization and scalability

---

### 2. **Entity Adapter for Normalized State**

**Decision:** Use `@ngrx/entity` for task state management

**Why:**
- ✅ O(1) lookups by ID
- ✅ Built-in CRUD operations (addOne, updateOne, removeOne)
- ✅ Prevents duplicate entities
- ✅ Simplifies common patterns

**Alternative Considered:** Array-based state
- ❌ O(n) lookups
- ❌ Manual duplicate checking
- ❌ More verbose reducer logic

**Tradeoff:** Slightly more initial setup, but massive performance gains at scale

---

### 3. **Optimistic Updates for Move Task**

**Decision:** Update UI immediately, rollback on failure

**Why:**
- ✅ Better UX - feels instant
- ✅ Reduces perceived latency
- ✅ Works well for high-success-rate operations

**Alternative Considered:** Pessimistic updates (wait for server)
- ❌ Slower perceived performance
- ❌ User waits for every operation

**Tradeoff:** Need rollback logic, but UX improvement is worth it

---

### 4. **Signals Over Observables**

**Decision:** Use signals for component state and store integration

**Why:**
- ✅ Simpler mental model
- ✅ Automatic change detection
- ✅ No manual subscription management
- ✅ Fine-grained reactivity

**Alternative Considered:** Pure RxJS with async pipe
- ❌ More subscription management
- ❌ More verbose
- ❌ Harder for beginners

**Tradeoff:** Less control over timing, but much simpler code

**Bridge Pattern:**
```typescript
// NgRx selector → Signal
tasks = this.store.selectSignal(selectTasks);

// Computed derived state
taskCount = computed(() => this.tasks().length);
```

---

### 5. **Dynamic Component Rendering with ViewContainerRef**

**Decision:** Custom directive over `*ngComponentOutlet`

**Why:**
- ✅ Full control over component lifecycle
- ✅ Type-safe inputs/outputs with generics
- ✅ Support for Observable and Signal inputs
- ✅ Proper subscription management

**Alternative Considered:** `*ngComponentOutlet`
- ❌ Limited input/output handling
- ❌ No type safety
- ❌ Less flexible

**Tradeoff:** More code, but much more powerful and type-safe

---

## Scalability Considerations

### 1. **Multiple Boards**

**Current Architecture Support:**
- ✅ Feature-based store allows per-board state
- ✅ Can lazy load board features
- ✅ Selectors already parameterized by board ID

**Implementation Path:**
```typescript
// Add board feature
export const boardsFeature = createFeature({
  name: 'boards',
  reducer: boardsReducer
});

// Lazy load board routes
{
  path: 'board/:id',
  loadComponent: () => import('./pages/board/board.component')
}
```

---

### 2. **Real-Time Collaboration (WebSocket)**

**Current Architecture Support:**
- ✅ Effects already handle async operations
- ✅ Optimistic updates pattern ready
- ✅ Action-based architecture maps well to events

---

### 3. **Undo/Redo Functionality**

**Current Architecture Support:**
- ✅ Action-based system makes history tracking easy
- ✅ Can implement as meta-reducer

---

### What AI Helped With:

**Boilerplate Code Generation:**
- Library usage for task board and imports
- Data structure for mock data 
- Directive skeleton with lifecycle hooks

**Documentation Structure:**
- Initial README.md outline and sections
- README structure with setup instructions

---

### What I Wrote/Modified:

**Business Logic Implementation:**
- Optimistic update pattern with rollback logic in reducers
- Move task effect with `concatMap` for ordered execution
- Priority breakdown selector using `reduce()`
- Completion rate calculation logic
- Immutable state update patterns (`.map()`, `.filter()`)
- Failure simulation logic (10% random failure rate)

**Selector Logic:**
- Parameterized `selectTasksByColumn` factory function
- Memoized `selectPriorityBreakdown` aggregation
- `selectCompletionRate` percentage calculation
- Composed selectors for widget data derivation

**Effect Error Handling:**
- `catchError` operators with proper error propagation
- Rollback mechanism on `move_Task_Failure`
- Error message formatting and state updates
- Optimistic dispatch timing with `concatMap`

**Component Integration:**
- Signal-based store integration with `selectSignal()`
- Computed signals for widget data transformation
- Event handler implementations dispatching actions
- Dynamic widget configuration array setup
- Template bindings and control flow (`@if`, `@for`)

**UI Implementation:**
- Task board layout with 3-column grid
- Widget dashboard styling and responsive design
- Task card expand/collapse functionality
- Dropdown for moving tasks with filtered options
- Loading and error state displays
- Debug panel for priority breakdown visualization (this is only for this test and not something that would be implemented usually)

### What I Would Add Next:

**High Priority:**
- Convert mock data to Restful API calls
- Add/Edit task form with reactive forms validation
- Remaining effects (Add, Update, Delete tasks)
- Unit tests for selectors and effects
- E2E tests

**Medium Priority:**
- Drag-and-drop task movement
- Task filtering and sorting
- Due date tracking with overdue indicators
- Task search functionality

**Low Priority:**
- Real-time collaboration with WebSockets
- Undo/redo functionality


