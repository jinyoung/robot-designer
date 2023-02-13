<template>
    <div class="row">
      <div class="col-3">
        <h3>Draggable 1</h3>
        <draggable
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'g1', pull: 'clone', put: false }"
          :clone="cloneTask"
        >
          <div class="list-group-item" v-for="element in list1" :key="element.type">
            {{ element.name }}
          </div>
        </draggable>
      </div>
  
      <div class="col-3">
        <h3>Draggable 2</h3>
  
          <nested-task :tasks="list2.child" />
  
        <!-- <draggable
          class="dragArea list-group"
          :list="list2"
          group="task"
          @change="log"
        >
          <div class="list-group-item" v-for="element in list2" :key="element.id">
            {{ element.name }}
          </div>
        </draggable> -->
  
  
      </div>
  
      <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />
  
      <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
    </div>
  </template>
  
  <script lang="ts">
  import Draggable from "vuedraggable";
  import NestedTask from "./infra/NestedTask.vue";
  import {SeqTask, Task, IfTask, ForTask} from "@/types/Task";
  
  import { Watch, Component, Vue } from "vue-property-decorator";
  
@Component({
    components: {
        NestedTask, Draggable
    }
  }
)
export default class TutorialsList extends Vue {
    private idGlobal: number = 50;

    list1: any[] = [
          {name: "For", type: ForTask},
          {name: "If", type: IfTask},
          {name: "Task", type: Task},
        ];

    list2: Task = new SeqTask(4, "seq", [
          new ForTask(5, "for", 
            [ new Task(6, "task") ]
          )
        ])
    ;
    
    @Watch("list2", {immediate: true, deep: true})
    log() {
        window.console.log(this.list2.toRobot(0));
    }

    cloneTask(item: any) {

        return new (item.type)(this.idGlobal++, item.name);
        

        // let cloned = item.clone();
        // cloned.id = this.idGlobal++;
        // return cloned;
    }
    
  }

  </script>
  <style scoped></style>
  