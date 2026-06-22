"use client";

import {
    PutObjectCommand,
    DeleteObjectCommand,
    // DeleteObjectsCommand,
    // ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { s3Client, region, bucket } from "@/lib/aws";

export const InvitationStorageService = {
    async upload(file, invitationId) {
        try {
            console.log("[1] upload entered");

            console.log("[2] instanceof Blob", file instanceof Blob);

            console.log("[3] before key");
            const key = `invitations/${invitationId}/${Date.now()}-${file.name}`;

            console.log("[4] before arrayBuffer");
            const arrayBuffer = await file.arrayBuffer();
            console.log("[5] after arrayBuffer", arrayBuffer.byteLength);

            console.log("[6] before PutObjectCommand");
            const command = new PutObjectCommand({
                Bucket: bucket,
                Key: key,
                Body: new Uint8Array(arrayBuffer),
                ContentType: file.type,
            });
            console.log("[7] after PutObjectCommand");

            try {
                console.log("[8] before send");

                const result = await s3Client.send(command);

                console.log("[9] after send", result);
            } catch (err) {
                console.error("[AWS SEND ERROR]");
                console.error(err);
                console.error(JSON.stringify(err, null, 2));
                throw err;
            }
            return {
                key,
                url: `https://${bucket}.s3.${region}.amazonaws.com/${key}`,
            };
        } catch (e) {
            console.error("[UPLOAD ERROR]", e);
            throw e;
        }
    },

    async uploadMany(files, invitationId) {
        console.log("[AWS] uploadMany", {
            invitationId,
            count: files?.length,
        });

        // if (!files?.length || !invitationId) return [];
        if (!files?.length) {
            console.log("[AWS] no files");
            return [];
        }

        if (!invitationId) {
            console.log("[AWS] missing invitation id");
            return [];
        }

        const uploaded = await Promise.all(
            files.map((file) => this.upload(file, invitationId)),
        );

        console.log("[AWS] uploadMany finished", uploaded);


        return uploaded.map((img) => img.url);
    },

    async delete(key) {
        if (!key) return;
        await s3Client.send(
            new DeleteObjectCommand({
                Bucket: bucket,
                Key: key,
            })
        );
    },

    // TODO Images with folder should be deleted after the invitation expires using a cron job.
    // async deleteInvitationFolder(invitationId) {
    //     if (!invitationId) return;

    //     const prefix = `invitations/${invitationId}/`;

    //     const listed = await s3Client.send(
    //         new ListObjectsV2Command({
    //             Bucket: bucket,
    //             Prefix: prefix,
    //         })
    //     );

    //     if (!listed.Contents || !listed.Contents.length) return;

    //     await s3Client.send(
    //         new DeleteObjectsCommand({
    //             Bucket: bucket,
    //             Delete: {
    //                 Objects: listed.Contents.map(obj => ({ Key: obj.Key })),
    //             },
    //         })
    //     );
    // },
};