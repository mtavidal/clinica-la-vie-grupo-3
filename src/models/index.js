import Atendimentos from './atendimentos/atendimentosModel.js';
import Pacientes from './pacientes/pacientesModel.js';
import Psicologos from './psicologos/psicologosModel.js';

Atendimentos.belongsTo(Psicologos, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'psicologo_id',
        allowNull: false,
    },
});
Atendimentos.belongsTo(Pacientes, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'paciente_id',
        allowNull: false,
    },
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: {
        name: 'paciente_id',
    },
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: {
        name: 'psicologo_id',
    },
});

export { Atendimentos, Pacientes, Psicologos };
