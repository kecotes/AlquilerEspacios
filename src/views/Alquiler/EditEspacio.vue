<template>
    <el-header>
        <Navbar />
    </el-header>

    <el-card class="box-card">
    <template #header>
        <div class="card-header">
            <span>Agregar un nuevo prestamo de espacio</span>
        </div>
    </template>
    <el-form :model="form" label-width="120px">
      
        <el-form-item label="Espacio solicitado">
            <el-input v-model="form.espacioSolicitado" value=""/>
        </el-form-item>
        <el-form-item label="Fecha de solicitud">
            <el-col :span="20">
            <el-date-picker
                v-model="form.fechaSolicitud"
                type="date"
                placeholder="Elije fecha"
                style="width: 100%"
            />
            </el-col>
        </el-form-item>
        <el-form-item label="Fecha del Evento">
            <el-col :span="8">
            <el-date-picker
                v-model="form.fechaEvento"
                type="date"
                placeholder="Elije fecha"
                style="width: 100%"
            />
            </el-col>
            <el-col :span="6">
            <el-time-picker
                v-model="form.horaInicio"
                placeholder="Hora de Inicio"
                style="width: 100%"
            />
            </el-col>
            <el-col :span="2" class="text-center">-</el-col>
            <el-col :span="6">
            <el-time-picker
                v-model="form.horaFinal"
                placeholder="Hora de Finalización"
                style="width: 100%"
            />
            </el-col>
        </el-form-item>
        <el-col :span="20">Datos del solicitante</el-col>
        <el-form-item label="Nombre Completo:">
            <el-input v-model="form.solicitante" />
        </el-form-item>
            <el-form-item label="No. Documento:">
                <el-input v-model="form.documento" />
            </el-form-item>
            <el-form-item label="Numero de Telefono:">
                <el-input v-model="form.telefono" />
            </el-form-item>
            <el-form-item label="Dirección:">
                <el-input v-model="form.direccion" />
            </el-form-item>
        <el-form-item label="Correo:">
            <el-input v-model="form.correo" />
        </el-form-item>
        <el-form-item label="Rep. Empresa:">
            <el-input v-model="form.empresa" />
        </el-form-item>

        <el-form-item label="Valor Alquiler:">
            <el-input v-model="form.valor" />
        </el-form-item>
        <el-form-item label="Contraprestación:">
            <el-input v-model="form.contraprestacion" />
        </el-form-item>

        <p :span="20"><strong>Observación:</strong> En ningún caso el usuario podrá colocar clavos, tornillos, cintas pegantes, ni pegamento sobre las paredes o muros. Esto para evitar el daño general y deterioro de la pintura.

            El usuario deberá responder por cualquier daño o pérdida parcial o total, será su responsabilidad devolver el espacio en buen estado y limpio.
        </p>

        <el-col :span="20">Inventario para la entrega</el-col>

        <el-form-item label="Paredes">
            <el-radio-group v-model="form.paredes">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Pisos">
            <el-radio-group v-model="form.pisos">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Puertas">
            <el-radio-group v-model="form.puertas">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Iluminación">
            <el-radio-group v-model="form.iluminacion">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Sanitarios ">
            <el-radio-group v-model="form.sanitarios">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Ventanas ">
            <el-radio-group v-model="form.ventanas">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Aire Acondicionado ">
            <el-radio-group v-model="form.aire">
                <el-radio label="Buen estado" />
                <el-radio label="Regular estado" />
                <el-radio label="Mal estado name" />
            </el-radio-group>
        </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submit">Crear</el-button>
        <el-button @click="handleCancel">Cancelar</el-button>
      </el-form-item>
    </el-form>
    </el-card>
  </template>
  

  <script>
  import { reactive, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { Post } from '@/service'
  
  export default {
    methods:{
        handleCancel(){
            this.$router.push('/')
        }
    },
    setup() {
      const router = useRouter()
      const route = useRoute()
      const postId = computed(() => route.params.id)
  
      const form = reactive({ title: '', description: '' })
      onMounted(async () => {
        const post = await Post.find(postId.value)
        form.espacioSolicitado = post.espacioSolicitado
        form.fechaSolicitud = post.fechaSolicitud
        form.horaInicio = post.horaInicio
        form.horaFinal= post.horaInicio
        form.solicitante = post.solicitante
        form.documento = post.documento
        form.telefono = post.telefono
        form.direccion = post.direccion
        form.correo = post.correo
        form.empresa = post.empresa
        form.valor = post.valor
        form.contraprestacion = post.contraprestacion
        form.paredes = post.paredes
        form.pisos = post.pisos
        form.puertas = post.puertas
        form.iluminacion = post.iluminacion
        form.sanitarios = post.sanitarios
        form.ventanas = post.ventanas
        form.aire = post.aire
      })
  
      const update = async () => {
        await Post.update(postId.value, { ...form })
        router.push('/')
      }
  
      return { form, update }
    }
  }
  </script>
  