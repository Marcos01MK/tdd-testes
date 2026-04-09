import { validateTitle, createTask, addTask, toggleTask, resetId } from '../src/taskManager.js';

describe('toggleTask', () => {
  beforeEach(() => {
    resetId();
  });

  it('deve marcar uma tarefa pendente como concluída', () => {
    const task = createTask('Tarefa pendente');
    const toggled = toggleTask(task);
    expect(toggled.completed).toBe(true);
  });

  it('deve desmarcar uma tarefa concluída', () => {
    const task = createTask('Tarefa pendente');
    const completed = toggleTask(task);
    const uncompleted = toggleTask(completed);
    expect(uncompleted.completed).toBe(false);
  });

  it('deve manter o id e o título inalterados', () => {
    const task = createTask('Minha tarefa');
    const toggled = toggleTask(task);
    expect(toggled.id).toBe(task.id);
    expect(toggled.title).toBe(task.title);
  });

  it('deve retornar um NOVO objeto (imutabilidade)', () => {
    const task = createTask('Tarefa original');
    const toggled = toggleTask(task);
    expect(toggled).not.toBe(task);
    expect(task.completed).toBe(false);
  });
});